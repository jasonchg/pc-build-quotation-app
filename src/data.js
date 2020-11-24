export const cpus = [
  {
    id: 1,
    name: 'AMD Ryzen 5 3600',
    price: 700,
    core: 6,
    clock: 4.2,
    tpd: 65,
    ig: 'none',
  },
  {
    id: 2,
    name: 'AMD Ryzen 7 3700X',
    price: 900,
    core: 8,
    clock: 4.4,
    tpd: 65,
    ig: 'none',
  },
  {
    id: 3,
    name: 'AMD Ryzen 9 3900X',
    price: 1200,
    core: 12,
    clock: 4.6,
    tpd: 105,
    ig: 'none',
  },
]

export const cpuCoolers = [
  {
    id: 4,
    name: 'Cooler Master Hyper 212 EVO',
    minRpm: 600,
    maxRpm: 2000,
    size: 240,
    price: 120,
  },
  {
    id: 5,
    name: 'Corsair H100i RGB Platinum',
    minRpm: 600,
    maxRpm: 2400,
    size: 240,
    price: 120,
  },
  {
    id: 5,
    name: 'Corsair H100i RGB Platinum',
    minRpm: 600,
    maxRpm: 2400,
    size: 240,
    price: 120,
  },
  {
    id: 6,
    name: 'NZXT Kraken X53',
    minRpm: 500,
    maxRpm: 2000,
    size: 240,
    price: 220,
  },
]

export const motherboards = [
  {
    id: 7,
    name: 'MSI B450 Tomahawk Max',
    socket: 'AM4',
    formFactor: 'ATX',
    maxMemory: 64,
    memorySlots: 4,
    price: 400,
  },
  {
    id: 8,
    name: 'Gigabyte B450 Ds3h',
    socket: 'AM4',
    formFactor: 'Micro ATX',
    maxMemory: 64,
    memorySlots: 4,
    price: 400,
  },
  {
    id: 9,
    name: 'Asus Tuf Gaming X570-Plus (Wi-Fi)',
    socket: 'AM4',
    formFactor: 'Micro ATX',
    maxMemory: 128,
    memorySlots: 4,
    price: 560,
  },
]

export const memories = [
  {
    id: 10,
    name: 'Corsair Vengeance LPX 16GB',
    speed: 3200,
    formFactor: 'DDR4',
    quantity: 2,
    stickSize: 6,
    price: 120,
  },
  {
    id: 11,
    name: 'G.Skill Ripjaws V 16GB',
    speed: 3200,
    formFactor: 'DDR4',
    quantity: 2,
    stickSize: 6,
    price: 240,
  },
]

export const storages = [
  {
    id: 12,
    name: 'Seagate Barracuda Compute',
    size: '2TB',
    type: '7200RPM',
    formFactor: '3.5',
    interface: 'SATA 6GB/s',
    price: 170,
  },
  {
    id: 13,
    name: 'Samsung 970 Evo',
    size: '1TB',
    type: 'SSD',
    formFactor: '3.5',
    interface: 'M.2-2280',
    price: 270,
  },
  {
    id: 14,
    name: 'Crucial P1',
    size: '1TB',
    type: 'SSD',
    formFactor: '3.5',
    interface: 'M.2-2280',
    price: 250,
  },
]

export const videoCards = [
  {
    id: 15,
    name: 'NVIDIA Founders Edition',
    chipset: 'GeForce RTX 3080',
    memory: 10,
    coreClock: 1440,
    price: 1250,
  },
  {
    id: 16,
    name: 'MSI Ventus Xs Oc',
    chipset: 'GeForce RTX 3070',
    memory: 8,
    coreClock: 1500,
    price: 1000,
  },
  {
    id: 17,
    name: 'MSI Gaming X',
    chipset: 'Radeon RX 5700 XT',
    memory: 8,
    coreClock: 1730,
    price: 1100,
  },
]

export const powerSupplies = [
  {
    id: 18,
    name: 'Corsair RM (2019)',
    efficiency: '80+ Gold',
    watt: 750,
    modular: 'full',
    price: 500,
  },
  {
    id: 19,
    name: 'Corsair RM (2019)',
    efficiency: '80+ Gold',
    watt: 750,
    modular: 'full',
    price: 500,
  },
]

export const casings = [
  {
    id: 20,
    name: 'NZXT H510',
    type: 'ATX Mid Tower',
    color: 'White',
    price: 180,
  },
  {
    id: 22,
    name: 'Corsair 275R Airflow',
    type: 'ATX Mid Tower',
    color: 'Black',
    price: 195,
  },
]
