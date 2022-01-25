import React from "react";
import EnchantsLayout from "../../components/EnchantsLayout";
import fs from "fs";
import matter from "gray-matter";
import Enchant from "../../components/Enchant";

export async function getStaticProps() {
    const files = fs.readdirSync("enchants/special");

    const enchants = files.map((fileName) => {
        const slug = fileName.replace(".md", "");
        const readFile = fs.readFileSync(
            `enchants/special/${fileName}`,
            "utf-8"
        );
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

export default function Specials({ enchants }) {
    return (
        <EnchantsLayout description="Encantamientos poderosos que solo es posible tener 1 por item.">
            {enchants.map(({ slug, frontmatter }) => (
                <Enchant
                    key={slug}
                    category="specials"
                    slug={slug}
                    frontmatter={frontmatter}
                ></Enchant>
            ))}
        </EnchantsLayout>
    );
}
