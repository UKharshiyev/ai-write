import { Pencil } from "lucide-react";
import PromptHistory from "./PromptHistory";
import { TPromptHistory } from "@/shared/types/prompt-history.type";

export default function Sidebar() {
    const mockItems: TPromptHistory[] = [
        {
            date: "Today",
            links: [
                { title: "Prompt 1", url: "/dashboard/prompt/1" },
                { title: "Prompt 2", url: "/dashboard/prompt/2" },
            ],
        },
        {
            date: "Yesterday",
            links: [
                { title: "Prompt 1", url: "/dashboard/prompt/1" },
                { title: "Prompt 2", url: "/dashboard/prompt/2" },
                { title: "Prompt 3", url: "/dashboard/prompt/3" },
            ],
        },
    ];

    return (
        <div className="h-screen w-80 border-r p-4">
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-semibold">AI Writer</h1>
                <button>
                    <Pencil size={24} />
                </button>
            </div>
            <PromptHistory items={mockItems} />
        </div>
    );
}
