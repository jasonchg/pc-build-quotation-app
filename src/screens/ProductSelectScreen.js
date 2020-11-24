import { useLocation } from 'react-router-dom'
import {
  cpus,
  cpuCoolers,
  motherboards,
  memories,
  storages,
  videoCards,
  powerSupplies,
  casings,
} from '../data'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Container,
  makeStyles,
} from '@material-ui/core'
const useStyles = makeStyles({
  root: {
    marginTop: 30,
  },
})

const ProductSelectScreen = ({ history }) => {
  const styleMe = useStyles()
  let query = new URLSearchParams(useLocation().search)
  let type = query.get('type')

  return (
    <>
      <Container maxWidth='md' className={styleMe.root}>
        <TableContainer component={Paper}>
          <Table>
            {type === 'cpu' && (
              <>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Core</TableCell>
                    <TableCell>Clock Speed</TableCell>
                    <TableCell>Integrated Graphic</TableCell>
                    <TableCell>TPD</TableCell>
                    <TableCell>Price(RM)</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cpus.map((cpu, i) => (
                    <TableRow key={i}>
                      <TableCell>{cpu.name}</TableCell>
                      <TableCell>{cpu.core}</TableCell>
                      <TableCell>{cpu.clock}Ghz</TableCell>
                      <TableCell>{cpu.ig}</TableCell>
                      <TableCell>{cpu.tpd}</TableCell>
                      <TableCell>{cpu.price}</TableCell>
                      <TableCell>
                        <Button
                          variant='contained'
                          color='primary'
                          onClick={() => {
                            localStorage.setItem(
                              'cpu',
                              JSON.stringify({
                                name: cpu.name,
                                price: cpu.price,
                              })
                            )

                            history.push('/')
                          }}
                        >
                          Add
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </>
            )}

            {type === 'cpu-cooler' && (
              <>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>RPM</TableCell>
                    <TableCell>Size</TableCell>
                    <TableCell>Price(RM)</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cpuCoolers.map((cooler, i) => (
                    <TableRow key={i}>
                      <TableCell>{cooler.name}</TableCell>
                      <TableCell>{`${cooler.minRpm}-${cooler.maxRpm}`}</TableCell>
                      <TableCell>{cooler.size}</TableCell>
                      <TableCell>{cooler.price}</TableCell>
                      <TableCell>
                        <Button
                          variant='contained'
                          color='primary'
                          onClick={() => {
                            localStorage.setItem(
                              'cpuCooler',
                              JSON.stringify({
                                name: cooler.name,
                                price: cooler.price,
                              })
                            )
                            history.push('/')
                          }}
                        >
                          Add
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </>
            )}

            {type === 'motherboard' && (
              <>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Socket</TableCell>
                    <TableCell>Form Factor</TableCell>
                    <TableCell>Max Memory</TableCell>
                    <TableCell>Memory Slots</TableCell>
                    <TableCell>Price(RM)</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {motherboards.map((mobo, i) => (
                    <TableRow key={i}>
                      <TableCell>{mobo.name}</TableCell>
                      <TableCell>{mobo.socket}</TableCell>
                      <TableCell>{mobo.formFactor}</TableCell>
                      <TableCell>{mobo.maxFactor}</TableCell>
                      <TableCell>{mobo.memorySlots}</TableCell>
                      <TableCell>{mobo.price}</TableCell>
                      <TableCell>
                        <Button
                          variant='contained'
                          color='primary'
                          onClick={() => {
                            localStorage.setItem(
                              'motherboard',
                              JSON.stringify({
                                name: mobo.name,
                                price: mobo.price,
                              })
                            )
                            history.push('/')
                          }}
                        >
                          Add
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </>
            )}
            {type === 'memory' && (
              <>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Speed</TableCell>
                    <TableCell>Form Factor</TableCell>
                    <TableCell>Size/Quanntity</TableCell>
                    <TableCell>Price(RM)</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {memories.map((memory, i) => (
                    <TableRow key={i}>
                      <TableCell>{memory.name}</TableCell>
                      <TableCell>{memory.speed}</TableCell>
                      <TableCell>{memory.formFactor}</TableCell>
                      <TableCell>{`${memory.stickSize}/${memory.quantity}`}</TableCell>
                      <TableCell>{memory.price}</TableCell>
                      <TableCell>
                        <Button
                          variant='contained'
                          color='primary'
                          onClick={() => {
                            localStorage.setItem(
                              'memory',
                              JSON.stringify({
                                name: memory.name,
                                price: memory.price,
                              })
                            )
                            history.push('/')
                          }}
                        >
                          Add
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </>
            )}
            {type === 'storage' && (
              <>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Size</TableCell>
                    <TableCell>Form Factor</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell>Interface</TableCell>
                    <TableCell>Price(RM)</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {storages.map((storage, i) => (
                    <TableRow key={i}>
                      <TableCell>{storage.name}</TableCell>
                      <TableCell>{storage.size}</TableCell>
                      <TableCell>{storage.formFactor}</TableCell>
                      <TableCell>{storage.type}</TableCell>
                      <TableCell>{storage.interface}</TableCell>
                      <TableCell>{storage.price}</TableCell>
                      <TableCell>
                        <Button
                          variant='contained'
                          color='primary'
                          onClick={() => {
                            localStorage.setItem(
                              'storage',
                              JSON.stringify({
                                name: storage.name,
                                price: storage.price,
                              })
                            )
                            history.push('/')
                          }}
                        >
                          Add
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </>
            )}
            {type === 'video-card' && (
              <>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Chipset</TableCell>
                    <TableCell>Memory</TableCell>
                    <TableCell>Core Clock</TableCell>
                    <TableCell>Price(RM)</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {videoCards.map((gpu, i) => (
                    <TableRow key={i}>
                      <TableCell>{gpu.name}</TableCell>
                      <TableCell>{gpu.chipset}</TableCell>
                      <TableCell>{gpu.memoery}</TableCell>
                      <TableCell>{gpu.coreClock}</TableCell>
                      <TableCell>{gpu.price}</TableCell>
                      <TableCell>
                        <Button
                          variant='contained'
                          color='primary'
                          onClick={() => {
                            localStorage.setItem(
                              'video-card',
                              JSON.stringify({
                                name: gpu.name,
                                price: gpu.price,
                              })
                            )
                            history.push('/')
                          }}
                        >
                          Add
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </>
            )}
            {type === 'power-supply' && (
              <>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Efficiency</TableCell>
                    <TableCell>Watts</TableCell>
                    <TableCell>Modular</TableCell>
                    <TableCell>Price(RM)</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {powerSupplies.map((psu, i) => (
                    <TableRow key={i}>
                      <TableCell>{psu.name}</TableCell>
                      <TableCell>{psu.efficiency}</TableCell>
                      <TableCell>{psu.watt}</TableCell>
                      <TableCell>{psu.modular}</TableCell>
                      <TableCell>{psu.price}</TableCell>
                      <TableCell>
                        <Button
                          variant='contained'
                          color='primary'
                          onClick={() => {
                            localStorage.setItem(
                              'power-supply',
                              JSON.stringify({
                                name: psu.name,
                                price: psu.price,
                              })
                            )
                            history.push('/')
                          }}
                        >
                          Add
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </>
            )}

            {type === 'casing' && (
              <>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell>Color</TableCell>
                    <TableCell>Price(RM)</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {casings.map((casing, i) => (
                    <TableRow key={i}>
                      <TableCell>{casing.name}</TableCell>
                      <TableCell>{casing.type}</TableCell>
                      <TableCell>{casing.color}</TableCell>
                      <TableCell>{casing.price}</TableCell>
                      <TableCell>
                        <Button
                          variant='contained'
                          color='primary'
                          onClick={() => {
                            localStorage.setItem(
                              'casing',
                              JSON.stringify({
                                name: casing.name,
                                price: casing.price,
                              })
                            )
                            history.push('/')
                          }}
                        >
                          Add
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </>
            )}
          </Table>
        </TableContainer>
      </Container>
    </>
  )
}

export default ProductSelectScreen
