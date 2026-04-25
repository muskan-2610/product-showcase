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
    { day: "Mon", desktop: 10 },
    { day: "Tue", desktop: 5 },
    { day: "Wed", desktop: 8 },
    { day: "Thu", desktop: 13 },
    { day: "Fri", desktop: 18 },
    { day: "Sat", desktop: 7 },
    { day: "Sun", desktop: 16 },
]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "var(--chart-1)",
    },
} satisfies ChartConfig

export function ChartBarDefault() {
    return (
        <Card className="bg-[#020202] border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.02)]">
            <CardHeader>
                <CardTitle>Utilization (Hours)</CardTitle>

            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={chartData}>
                        
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
                        <Bar dataKey="desktop" fill="#B070EA" radius={8} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
