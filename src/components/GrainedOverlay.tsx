"use client"

import { grained } from "@/lib/grained";
import { useEffect } from "react"

export default function GrainedOverlay() {

    useEffect(() => {
        var options = {
            "animate": false,
            "patternWidth": 100,
            "patternHeight": 100,
            "grainOpacity": 0.4,
            "grainDensity": 1,
            "grainWidth": 1,
            "grainHeight": 1
          }

          options = {
            "animate": false,
            "patternWidth": 220.72,
            "patternHeight": 64.03,
            "grainOpacity": 0.3,
            "grainDensity": 1.2,
            "grainWidth": 1.69,
            "grainHeight": 1.69
          }

    grained('grained-overlay',options)
    }, [])
    return(
        <div className="absolute top-0 left-0 w-screen h-full pointer-events-none z-50 opacity-15" id='grained-overlay'>
        </div>
    )
    
}
