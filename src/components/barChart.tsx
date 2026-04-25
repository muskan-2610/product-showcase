"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig,
} from "@/components/ui/chart"

export const description = "A bar chart"

const chartData = [
    { day: "Mon", desktop: 186 },
    { day: "Tue", desktop: 305 },
    { day: "Wed", desktop: 80 },
    { day: "Thu", desktop: 240 },
    { day: "Fri", desktop: 209 },
    { day: "Sat", desktop: 122 },
    { day: "Sun", desktop: 315 },
]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "var(--chart-1)",
    },
} satisfies ChartConfig

export function ChartBarDefault() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Utilization (Hours)</CardTitle>

            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="day"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />

                        <YAxis
                            dataKey="desktop"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}

                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
