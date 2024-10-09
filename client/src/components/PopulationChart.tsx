"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

const PopulationChart = ({ data }: any) => {
  return (
    <>
      {
        data.length > 0
          ?
        (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 20,
              }}
            >
              <CartesianGrid strokeDasharray="1 1" />
              <XAxis dataKey="year" />
              <YAxis dataKey="value" />
              <Tooltip
                contentStyle={{ backgroundColor: "#333", color: "#fff" }}
                itemStyle={{ color: "#fff" }}
              />
              <Legend wrapperStyle={{ color: "#333" }} />
              <Line
                type="basisOpen"
                dataKey="value"
                name="Population"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        )
          :
        (
          <div>
            <span>No data Available for this country</span>
          </div>
        )
      }
    </>
  )
}

export default PopulationChart