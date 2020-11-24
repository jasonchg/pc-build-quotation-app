import { useLocation, useState } from 'react-router-dom'
import {
  cpus,
  cpuCoolers,
  motherboards,
  memories,
  storages,
  videoCards,
  powerSupplies,
} from '../data'

const ProductSelectScreen = () => {
  let query = new URLSearchParams(useLocation().search)
  let type = query.get('type')

  return (
    <>
      {type === 'cpu' && cpus.map((cpu, i) => <div key={i}>{cpu.name}</div>)}
      {type === 'cpu-cooler' &&
        cpuCoolers.map((cooler, i) => <div key={i}>{cooler.name}</div>)}
      {type === 'motherboard' &&
        motherboards.map((mobo, i) => <div key={i}>{mobo.name}</div>)}
      {type === 'memory' &&
        memories.map((memory, i) => <div key={i}>{memory.name}</div>)}
      {type === 'storage' &&
        storages.map((storage, i) => <div key={i}>{storage.name}</div>)}
      {type === 'video-card' &&
        videoCards.map((gpu, i) => <div key={i}>{gpu.name}</div>)}
      {type === 'power-supply' &&
        powerSupplies.map((psu, i) => <div key={i}>{psu.name}</div>)}
    </>
  )
}

export default ProductSelectScreen
