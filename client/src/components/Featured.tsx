import React from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '@c/ui-components'

const Featured = ({ icon, title, description }: any) : React.JSX.Element => {
  return (
    <>
      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center text-lg font-semibold">
            {icon}
            <span className="ml-2">{title}</span>
          </CardTitle>
        </CardHeader>
        
        <CardContent>
          <CardDescription>{description}</CardDescription>
        </CardContent>
      </Card>
    </>
  )
}

export default Featured