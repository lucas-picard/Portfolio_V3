function Block({ position, size, color, emissive = '#000000', emissiveIntensity = 0 }) {
  return (
    <mesh position={position} castShadow>
      <boxGeometry args={size} />
      <meshStandardMaterial
        color={color}
        emissive={emissive}
        emissiveIntensity={emissiveIntensity}
        roughness={0.78}
      />
    </mesh>
  )
}

export default function VoxelBot({ position }) {
  return (
    <group position={position}>
      <Block position={[0, 0.18, 0]} size={[0.48, 0.28, 0.54]} color="#343b36" />
      <Block position={[-0.27, 0.34, 0]} size={[0.35, 0.38, 0.48]} color="#f0ead4" />
      <Block position={[0.27, 0.34, 0]} size={[0.35, 0.38, 0.48]} color="#f0ead4" />

      <Block position={[0, 0.95, 0]} size={[0.92, 0.92, 0.68]} color="#eee9d5" />
      <Block position={[0, 1.02, 0.36]} size={[0.44, 0.4, 0.08]} color="#d58a26" />
      <Block position={[0, 1.02, 0.415]} size={[0.3, 0.25, 0.04]} color="#f5cb4e" />

      <Block position={[-0.63, 1.08, 0]} size={[0.28, 0.72, 0.38]} color="#eee9d5" />
      <Block position={[0.63, 1.08, 0]} size={[0.28, 0.72, 0.38]} color="#eee9d5" />
      <Block position={[-0.63, 0.73, 0.03]} size={[0.32, 0.24, 0.42]} color="#d58a26" />
      <Block position={[0.63, 0.73, 0.03]} size={[0.32, 0.24, 0.42]} color="#d58a26" />

      <Block position={[0, 2.03, 0]} size={[1.3, 1.12, 1.02]} color="#f0ead8" />
      <Block position={[-0.35, 2.14, 0.53]} size={[0.2, 0.28, 0.08]} color="#183d32" emissive="#30b66b" emissiveIntensity={0.35} />
      <Block position={[0.35, 2.14, 0.53]} size={[0.2, 0.28, 0.08]} color="#183d32" emissive="#30b66b" emissiveIntensity={0.35} />
      <Block position={[0, 1.86, 0.535]} size={[0.3, 0.09, 0.07]} color="#343b36" />
      <Block position={[-0.47, 2.82, 0]} size={[0.3, 0.34, 0.34]} color="#d9d2bc" />
      <Block position={[0.47, 2.82, 0]} size={[0.3, 0.34, 0.34]} color="#d9d2bc" />
      <Block position={[-0.47, 2.9, 0.02]} size={[0.16, 0.14, 0.2]} color="#c94d3d" />
      <Block position={[0.47, 2.9, 0.02]} size={[0.16, 0.14, 0.2]} color="#c94d3d" />
    </group>
  )
}
