"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig,
} from "@/components/ui/chart"

export const description = "A line chart"

const chartData = [
    { time: "01:10", value: 186 },
    { time: "11:10", value: 305 },
    { time: "12:00", value: 237 },
    { time: "14:00", value: 73 },
    { time: "15:00", value: 209 },
    { time: "16:00", value: 214 },
]

const chartConfig = {
    value: {
        label: "Value",
        color: "var(--chart-1)",
    },
} satisfies ChartConfig

export function ChartLineDefault({ className }) {
    return (
        <Card className={className}>
            <CardHeader>
                <CardTitle>Line Chart</CardTitle>
                <CardDescription>January - June 2024</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <LineChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="time"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Line
                            dataKey="value"
                            type="natural"
                            stroke="var(--color-desktop)"
                            strokeWidth={2}
                            dot={false}
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>

        </Card>
    )
}
