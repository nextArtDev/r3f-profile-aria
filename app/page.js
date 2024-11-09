'use client'
import Experience from '@/components/Experience'
import { View } from '@react-three/drei'

export default function Home() {
  return (
    <div className="h-screen w-full">
      <View className="w-full h-full">
        <Experience />
      </View>
    </div>
  )
}
