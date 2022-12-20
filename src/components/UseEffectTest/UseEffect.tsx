import { useEffect, useState } from "react"



function UseEffectTest() {
    const [count, setcount] = useState(0)
    const [mouse, setMouse] = useState({ x: 0, y: 0 })


    function cursor(e) {
        setMouse({ x: e.clientX, y: e.clientY })
    }

    useEffect(() => {
        window.addEventListener("mousemove", cursor)

        setcount(prev => prev + 1)

        return () => {
            window.removeEventListener("mousemove", cursor)
        }
    }, [])


    return (
        <>
            <div
                style={{
                    backgroundColor: "red",
                    width: "2.5rem", height: "2.5rem",
                    borderRadius: "50%",
                    position: "absolute",
                    transform: `translateX(${mouse.x - 57}px) 
                    translateY(${mouse.y - 53}px)`,
                }}
            />

        </>
    )
}

export default UseEffectTest;