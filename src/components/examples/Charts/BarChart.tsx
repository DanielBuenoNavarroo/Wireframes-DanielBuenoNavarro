import {cva} from 'class-variance-authority';
import {TrendingUp} from "lucide-react";
import {Bar, BarChart, XAxis, YAxis, Tooltip} from "recharts";
import React from "react";

type ChartData = {
    label: string;
    value: number;
};

type ChartConfig = {
    [key: string]: {
        label: string;
    };
};

type BarChartComponentProps = {
    chartData: ChartData[];
    chartConfig: ChartConfig;
};

const cardStyles = cva("shadow-md rounded-lg p-4 bg-white", {
    variants: {
        variant: {
            default: "",
            primary: "border border-blue-500",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});

const headerStyles = cva("mb-2", {
    variants: {
        align: {
            center: "text-center",
            left: "text-left",
        },
    },
    defaultVariants: {
        align: "left",
    },
});

const footerStyles = cva("flex-col items-start gap-2 text-sm", {
    variants: {
        spacing: {
            normal: "gap-2",
            wide: "gap-4",
        },
    },
    defaultVariants: {
        spacing: "normal",
    },
});

const colorMap = {
    blue: 'fill-blue-500',
    green: 'fill-green-500',
    orange: 'fill-orange-500',
    teal: 'fill-teal-500',
    gray: 'fill-gray-500',
};

const BarChartComponent: React.FC<BarChartComponentProps> = ({chartData, chartConfig}) => {
    const getColorByIndex = (index: number): string => {
        const colorKeys = Object.keys(colorMap) as Array<keyof typeof colorMap>;
        return colorMap[colorKeys[index % colorKeys.length]];
    };
    
    return (
        <div className={cardStyles({variant: "primary"})}>
            <div className={headerStyles({align: "center"})}>
                <h3 className="font-semibold text-lg">Bar Chart - Mixed</h3>
                <p className="text-gray-500 text-sm">January - June 2024</p>
            </div>
            <div className="p-4">
                <BarChart
                    width={400}
                    height={300}
                    data={chartData}
                    layout="vertical"
                    margin={{left: 0}}
                >
                    <YAxis
                        dataKey="label"
                        type="category"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) =>
                            chartConfig[value]?.label || value
                        }
                    />
                    <XAxis dataKey="value" type="number" hide/>
                    <Tooltip cursor={{fill: 'transparent'}}/>
                    {chartData.map((data, index) => (
                        <Bar
                            key={data.label}
                            dataKey="value"
                            layout="vertical"
                            radius={5}
                            fill={getColorByIndex(index)}
                        />
                    ))}
                </BarChart>
            </div>
            <div className={footerStyles({spacing: "wide"})}>
                <div className="flex gap-2 font-medium leading-none">
                    Trending up by 5.2% this month <TrendingUp className="h-4 w-4"/>
                </div>
                <div className="leading-none text-gray-500">
                    Showing total visitors for the last 6 months
                </div>
            </div>
        </div>
    );
}

export default BarChartComponent;