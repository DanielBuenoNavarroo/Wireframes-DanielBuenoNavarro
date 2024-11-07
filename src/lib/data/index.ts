import {CarouselPage, CodeViewerPage, Introduction} from "@/pages/Docs";

export const DocsItems = [
    {
        title: "Getting Started",
        links: [
            {
                url: "",
                label: "Introduction",
                component: Introduction
            }
        ]
    },
    {
        title: "Components",
        links: [
            {
                url: "carousel",
                label: "Carousel",
                component: CarouselPage
            },
            {
                url: "code-viewer",
                label: "CodeViewer",
                component: CodeViewerPage
            }
        ]
    }
]