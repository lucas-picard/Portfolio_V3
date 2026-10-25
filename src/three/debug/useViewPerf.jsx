import { useControls } from "leva"

export default function useViewPerf(name) {
    return useControls(
        name, 
        {
        perfVisible: false
        },
        {
            collapsed: true
        }

    )
}