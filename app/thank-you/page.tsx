"use client"

import { Button } from "@/components/ui/button"

export default function ThankYouPage() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-3xl font-bold mb-4">🎉 Thank You for Registering!</h1>
            <p className="mb-6 text-lg max-w-md">
                Your registration has been received successfully.
                Join our WhatsApp group now to stay updated and not miss important announcements.
            </p>
            <Button asChild className="h-12 px-8 text-lg font-semibold">
                <a
                    href="https://chat.whatsapp.com/GpDEzlmS2DdE6GEs5F8dLV"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Join WhatsApp Group
                </a>
            </Button>
        </section>
    )
}
