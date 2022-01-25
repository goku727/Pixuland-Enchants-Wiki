import React from "react";
import EnchantsLayout from "../../components/EnchantsLayout";
import fs from "fs";
import matter from "gray-matter";
import Enchant from "../../components/Enchant";

export async function getStaticProps() {
    const files = fs.readdirSync("enchants/curse");

    const enchants = files.map((fileName) => {
        const slug = fileName.replace(".md", "");
        const readFile = fs.readFileSync(`enchants/curse/${fileName}`, "utf-8");
        const { data: frontmatter } = matter(readFile);
        return {
            slug,
            frontmatter,
        };
    });

    return {
        props: {
            enchants,
        },
    };
}

export default function Curses({ enchants }) {
    return (
        <EnchantsLayout description="Aplica penalizaciones al item que lo contenga.">
            {enchants.map(({ slug, frontmatter }) => (
                <Enchant
                    key={slug}
                    category="curses"
                    slug={slug}
                    frontmatter={frontmatter}
                ></Enchant>
            ))}
        </EnchantsLayout>
    );
}
