"use client"

import { useEffect } from "react"
import {Crisp} from 'crisp-sdk-web'

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("0d94694d-85d5-4764-a27c-8db5edbc0d2a")
    },[])

    return null
}