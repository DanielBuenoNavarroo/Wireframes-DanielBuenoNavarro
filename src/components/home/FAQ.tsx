import FAQIn from "@/components/home/FAQIn.tsx";

const FAQ = () => {
    const props = [
        {
            question: "How do I get started?",
            answer: "Simply follow the instructions in the documentation or run the command to create a new project.",
        },
        {
            question: "Do you plan to publish it as an npm package?",
            answer: "No. I have no plans to publish it as an npm package."
        },
        {
            question: "Is this free to use?",
            answer: "Yes, this UI components are completely open-source and free to use."
        }
    ]
    return (
        <section className="pb-8">
            <div className="max-w-screen-xl mx-auto text-center space-y-8 md:space-y-16">
                <h2 className="text-3xl md:text-5xl font-semibold text-gray-200">FAQ</h2>
                <div className="space-y-8 md:space-y-16 px-6">
                    {props.map((prop, index) => (
                        <FAQIn key={index} question={prop.question} answer={prop.answer}/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;