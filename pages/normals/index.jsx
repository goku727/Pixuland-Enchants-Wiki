import React from "react";
import EnchantsLayout from "../../components/EnchantsLayout";
import fs from "fs";
import matter from "gray-matter";
import Enchant from "../../components/Enchant";

export async function getStaticProps() {
    const files = fs.readdirSync("enchants/normal");

    const enchants = files.map((fileName) => {
        const slug = fileName.replace(".md", "");
        const readFile = fs.readFileSync(
            `enchants/normal/${fileName}`,
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

export default function Normals({ enchants }) {
    return (
        <EnchantsLayout description="Encantamientos que añaden ventajas a los items.">
            {enchants.map(({ slug, frontmatter }) => (
                <Enchant
                    key={slug}
                    category="normals"
                    slug={slug}
                    frontmatter={frontmatter}
                ></Enchant>
            ))}
        </EnchantsLayout>
    );
}
