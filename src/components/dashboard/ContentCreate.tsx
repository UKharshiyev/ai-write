import { Label } from "@radix-ui/react-dropdown-menu";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { FormEvent, useState } from "react";
import { Loader2 } from "lucide-react";

export default function ContenCreate() {
    const [isLoading, setIsLoading] = useState(false)
    const [form, setForm] = useState({
        title: '',
        description: '',
    })
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        if(form.title && form.description) {
            setIsLoading(true)
        }
    }

    const handleChange = (event: FormEvent <HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.currentTarget
        setForm({...form, [name]: value})
        console.log(name, value);
        
        
    }
    return (
        <div>
            <h1 className="text-3xl font-semibold">Article write</h1>
            <form className="mt-4" onSubmit={handleSubmit}>
                <div className="grid w-full max-w-sm gap-1.5 mb-4">
                    <Label htmlFor="title">Title</Label>
                    <Input
                        onChange={handleChange}
                        type="text"
                        id="title"
                        placeholder="Title"
                        name="title"
                        disabled={isLoading}
                    />
                </div>
                <div className="grid w-full gap-1.5 mb-4">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                        onChange={handleChange}
                        placeholder="Type your description here."
                        id="description"
                        name="description"
                        disabled={isLoading}
                    />
                </div>
                <Button disabled={isLoading}>
                    {isLoading && <Loader2 className="animate-spin" />}
                    Generate
                </Button>
            </form>
        </div>
    );
}
