// Icône SVG locale provenant de Pixelarticons ou Gentleface.
export default function Icon({ name, set = "pixel", size = 24, className = "" }) {
    const iconPath = `/assets/Logos/${set}-${name}.svg`

    return (
        <span
            aria-hidden="true"
            className={className}
            style={{
                display: "inline-block",
                width: size,
                height: size,
                flex: "0 0 auto",
                backgroundColor: "currentColor",
                mask: `url("${iconPath}") center / contain no-repeat`,
                WebkitMask: `url("${iconPath}") center / contain no-repeat`,
            }}
        />
    )
}
