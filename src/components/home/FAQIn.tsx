import {useState} from "react";

type FAQInProps = {
    question: string;
    answer: string;
}

const FAQIn = ({question, answer}: FAQInProps) => {
    const [isHovered, setIsHovered] = useState(false)
    return (
        <div
            className={`p-6 rounded-lg shadow-md cursor-default ${!isHovered ? 'shadow-blue-600' : 'shadow-orange-600'}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <h3 className="text-2xl font-semibold mb-4">{question}</h3>
            <p className="text-gray-400">{answer}</p>
        </div>
    );
};

export default FAQIn;