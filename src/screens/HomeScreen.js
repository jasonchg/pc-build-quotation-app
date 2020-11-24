import { useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
  Link,
  Container,
  makeStyles,
} from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    marginTop: 30,
  },
})

export const HomeScreen = ({ history }) => {
  const styleMe = useStyles()
  const [cpu, setCpu] = useState(null)
  const [cpuCooler, setCpuCooler] = useState(null)
  const [motherboard, setMotherboard] = useState(null)
  const [memory, seMemory] = useState(null)
  const [storage, setStorage] = useState(null)
  const [videoCard, setVideoCard] = useState(null)
  const [casing, setCasing] = useState(null)
  const [powerSupply, setPowerSupply] = useState(null)
  return (
    <Container maxWidth='md' className={styleMe.root}>
      <>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Component</TableCell>
                <TableCell>Selection</TableCell>
                <TableCell>Price(RM)</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>CPU</TableCell>
                {cpu !== null ? (
                  <>
                    <TableCell>{cpu.name}</TableCell>
                    <TableCell>{cpu.price}</TableCell>
                    <TableCell>
                      <Button
                        variant='contained'
                        color='primary'
                        size='small'
                        onClick={() => setCpu(null)}
                      >
                        X
                      </Button>
                    </TableCell>
                  </>
                ) : (
                  <>
                    <TableCell colSpan='3'>
                      <Button
                        variant='contained'
                        color='secondary'
                        onClick={() => history.push('/product?type=cpu')}
                      >
                        Add Cpu Coloer
                      </Button>
                    </TableCell>
                  </>
                )}
              </TableRow>
              <TableRow>
                <TableCell>CPU Cooler</TableCell>
                {cpuCooler !== null ? (
                  <>
                    <TableCell>{cpuCooler.name}</TableCell>
                    <TableCell>{cpuCooler.price}</TableCell>
                  </>
                ) : (
                  <>
                    <TableCell colSpan='3'>
                      <Button
                        variant='contained'
                        color='secondary'
                        onClick={() => history.push('/product?type=cpu-cooler')}
                      >
                        Add Cpu Coloer
                      </Button>
                    </TableCell>
                  </>
                )}
              </TableRow>
              <TableRow>
                <TableCell>Motherboard</TableCell>
                {motherboard !== null ? (
                  <>
                    <TableCell>{motherboard.name}</TableCell>
                    <TableCell>{motherboard.price}</TableCell>
                  </>
                ) : (
                  <>
                    <TableCell colSpan='3'>
                      <Button
                        variant='contained'
                        color='secondary'
                        onClick={() =>
                          history.push('/product?type=motherboard')
                        }
                      >
                        Add Motherboard
                      </Button>
                    </TableCell>
                  </>
                )}
              </TableRow>
              <TableRow>
                <TableCell>Memory</TableCell>
                {memory !== null ? (
                  <>
                    <TableCell>{memory.name}</TableCell>
                    <TableCell>{memory.price}</TableCell>
                  </>
                ) : (
                  <>
                    <TableCell colSpan='3'>
                      <Button
                        variant='contained'
                        color='secondary'
                        onClick={() => history.push('/product?type=memory')}
                      >
                        Add Memory
                      </Button>
                    </TableCell>
                  </>
                )}
              </TableRow>
              <TableRow>
                <TableCell>Storage</TableCell>
                {storage !== null ? (
                  <>
                    <TableCell>{storage.name}</TableCell>
                    <TableCell>{storage.price}</TableCell>
                  </>
                ) : (
                  <>
                    <TableCell colSpan='3'>
                      <Button
                        variant='contained'
                        color='secondary'
                        onClick={() => history.push('/product?type=storage')}
                      >
                        Add Storage
                      </Button>
                    </TableCell>
                  </>
                )}
              </TableRow>
              <TableRow>
                <TableCell>Video Card</TableCell>
                {videoCard !== null ? (
                  <>
                    <TableCell>{videoCard.name}</TableCell>
                    <TableCell>{videoCard.price}</TableCell>
                  </>
                ) : (
                  <>
                    <TableCell colSpan='3'>
                      <Button
                        variant='contained'
                        color='secondary'
                        onClick={() => history.push('/product?type=video-card')}
                      >
                        Add Video Card
                      </Button>
                    </TableCell>
                  </>
                )}
              </TableRow>
              <TableRow>
                <TableCell>Case</TableCell>
                {casing !== null ? (
                  <>
                    <TableCell>{casing.name}</TableCell>
                    <TableCell>{casing.price}</TableCell>
                  </>
                ) : (
                  <>
                    <TableCell colSpan='3'>
                      <Button
                        variant='contained'
                        color='secondary'
                        onClick={() => history.push('/product?type=casing')}
                      >
                        Add Casing
                      </Button>
                    </TableCell>
                  </>
                )}
              </TableRow>
              <TableRow>
                <TableCell>Power Supply</TableCell>
                {powerSupply !== null ? (
                  <>
                    <TableCell>{powerSupply.name}</TableCell>
                    <TableCell>{powerSupply.price}</TableCell>
                  </>
                ) : (
                  <>
                    <TableCell colSpan='3'>
                      <Button
                        variant='contained'
                        color='secondary'
                        onClick={() =>
                          history.push('/product?type=power-supply')
                        }
                      >
                        Add Power Supply
                      </Button>
                    </TableCell>
                  </>
                )}
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </>
    </Container>
  )
}
