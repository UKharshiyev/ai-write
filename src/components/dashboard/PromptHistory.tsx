import { TPromptHistory } from "@/shared/types/prompt-history.type";
import { Link } from "react-router-dom";

type IPropmtHistortProps = {
    items: TPromptHistory[];
};

export default function PromptHistory({ items }: IPropmtHistortProps) {
    return (
        <nav className="mt-8">
            {items.map(item => (
                <div key={item.date} className="mb-4">
                    <h5 className="font-semibold text-sm text-gray-400">
                        {item.date}
                    </h5>
                    <nav className="mt-4">
                        {item.links.map(link => (
                            <Link
                                key={link.url}
                                to={link.url}
                                className="flex items-center rounded-md text-sm hover:bg-neutral-100 px-3 py-2">
                                {link.title}
                            </Link>
                        ))}
                    </nav>
                </div>
            ))}
        </nav>
    );
}
