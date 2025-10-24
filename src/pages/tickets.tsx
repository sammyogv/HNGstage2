import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { toast } from "sonner";
import { Edit, Trash2} from "lucide-react";

interface Ticket {
  id: number;
  title: string;
  status: "open" | "in_progress" | "closed";
  description?: string;
}

export default function TicketManagement() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState({
    title: "",
    status: "open" as Ticket["status"],
    description: "",
  });

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("tickets");
    if (saved) setTickets(JSON.parse(saved));
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("tickets", JSON.stringify(tickets));
  }, [tickets]);

  const validateForm = () => {
    if (!form.title.trim()) {
      toast.error("Title is required.");
      return false;
    }
    if (!["open", "in_progress", "closed"].includes(form.status)) {
      toast.error("Invalid status value.");
      return false;
    }
    return true;
  };

  const resetForm = () =>
    setForm({ title: "", status: "open", description: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (editingId) {
      setTickets((prev) =>
        prev.map((t) =>
          t.id === editingId ? { ...t, ...form } : t
        )
      );
      toast.success("Ticket updated successfully!");
      setEditingId(null);
    } else {
      const newTicket: Ticket = {
        id: Date.now(),
        ...form,
      };
      setTickets((prev) => [...prev, newTicket]);
      toast.success("Ticket created successfully!");
    }

    resetForm();
  };

  const handleEdit = (id: number) => {
    const ticket = tickets.find((t) => t.id === id);
    if (ticket) {
      setForm({
        title: ticket.title,
        status: ticket.status,
        description: ticket.description ?? "",
      });
      setEditingId(id);
    }
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this ticket?")) {
      setTickets((prev) => prev.filter((t) => t.id !== id));
      toast.success("Ticket deleted successfully!");
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open":
        return "bg-green-100 text-green-800";
      case "in_progress":
        return "bg-amber-100 text-amber-800";
      case "closed":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="max-w-[1440px] mx-auto p-6 space-y-10">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Ticket Management</h1>
      </div>

      {/* Ticket Form */}
      <Card>
        <CardHeader>
          <CardTitle>{editingId ? "Edit Ticket" : "Create New Ticket"}</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleSubmit}
            className="grid gap-4 md:grid-cols-3"
          >
            <Input
              placeholder="Ticket Title *"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
            <Select
              value={form.status}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setForm({ ...form, status: e.target.value as Ticket["status"] })
              }
            >
              <option value="open">Open</option>
              <option value="in_progress">In Progress</option>
              <option value="closed">Closed</option>
            </Select>
            <Input
              placeholder="Description (optional)"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
            />
            <Button type="submit" className="md:col-span-3">
              {editingId ? "Update Ticket" : "Create Ticket"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Ticket List */}
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {tickets.length === 0 ? (
          <p className="text-gray-600">No tickets created yet.</p>
        ) : (
          tickets.map((ticket) => (
            <Card key={ticket.id} className="shadow-md">
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  {ticket.title}
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${getStatusColor(
                      ticket.status
                    )}`}
                  >
                    {ticket.status.replace("_", " ")}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700 mb-4">
                  {ticket.description || "No description"}
                </p>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleEdit(ticket.id)}
                  >
                    <Edit size={16} />
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleDelete(ticket.id)}
                  >
                    <Trash2 size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
