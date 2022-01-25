import React from "react";
import Link from "next/link";
import md from "markdown-it";

export default function EnchantInfo({ category, content }) {
    return (
        <>
            <Link href={"/" + category}>
                <button className="absolute bg-gray-50 p-6 rounded-xl shadow-md hover:text-white hover:bg-gray-700">
                    Retroceder
                </button>
            </Link>
            <div className="prose mx-auto container p-10 px-20 bg-gray-50 min-w-[50%] rounded-xl shadow-md">
                <div
                    dangerouslySetInnerHTML={{ __html: md().render(content) }}
                />
            </div>
        </>
    );
}
