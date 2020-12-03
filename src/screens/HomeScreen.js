import { useState, useEffect } from 'react'

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

import TrashIcon from '@material-ui/icons/Delete'

const useStyles = makeStyles({
  root: {
    marginTop: 30,
  },
  deleteButton: {
    backgroundColor: ' #e63946',
    color: '#fff',
  },
})

export const HomeScreen = ({ history }) => {
  useEffect(() => {
    if (localStorage.getItem('myPcBuild') !== null) {
      localStorage.removeItem('myPcBuild')
    }

    if (localStorage.getItem('myName') !== null) {
      setMyName(localStorage.getItem('myName'))
    }

    if (localStorage.getItem('cpu') !== null) {
      let myCpu = JSON.parse(localStorage.getItem('cpu'))
      setCpu(myCpu)
    }

    if (localStorage.getItem('cpuCooler') !== null) {
      let myCpuCooler = JSON.parse(localStorage.getItem('cpuCooler'))
      setCpuCooler(myCpuCooler)
    }
    if (localStorage.getItem('motherboard') !== null) {
      let myMotherboard = JSON.parse(localStorage.getItem('motherboard'))
      setMotherboard(myMotherboard)
    }
    if (localStorage.getItem('memory') !== null) {
      let myMemory = JSON.parse(localStorage.getItem('memory'))
      setMemory(myMemory)
    }
    if (localStorage.getItem('storage') !== null) {
      let myStorage = JSON.parse(localStorage.getItem('storage'))
      setStorage(myStorage)
    }
    if (localStorage.getItem('video-card') !== null) {
      let myVideoCard = JSON.parse(localStorage.getItem('video-card'))
      setVideoCard(myVideoCard)
    }
    if (localStorage.getItem('casing') !== null) {
      let myCasing = JSON.parse(localStorage.getItem('casing'))
      setCasing(myCasing)
    }
    if (localStorage.getItem('power-supply') !== null) {
      let myPowerSupply = JSON.parse(localStorage.getItem('power-supply'))
      setPowerSupply(myPowerSupply)
    }
  }, [])

  const styleMe = useStyles()
  const [cpu, setCpu] = useState(null)
  const [cpuCooler, setCpuCooler] = useState(null)
  const [motherboard, setMotherboard] = useState(null)
  const [memory, setMemory] = useState(null)
  const [storage, setStorage] = useState(null)
  const [videoCard, setVideoCard] = useState(null)
  const [casing, setCasing] = useState(null)
  const [powerSupply, setPowerSupply] = useState(null)
  const [myName, setMyName] = useState('Unknown')

  let sub = 0
  sub =
    Number(cpu ? cpu.price : 0) +
    Number(cpuCooler ? cpuCooler.price : 0) +
    Number(motherboard ? motherboard.price : 0) +
    Number(memory ? memory.price : 0) +
    Number(storage ? storage.price : 0) +
    Number(videoCard ? videoCard.price : 0) +
    Number(casing ? casing.price : 0) +
    Number(powerSupply ? powerSupply.price : 0)

  const saveThisRigs = () => {
    if (
      localStorage.getItem('cpu') === null ||
      localStorage.getItem('cpuCooler') === null ||
      localStorage.getItem('motherboard') === null ||
      localStorage.getItem('memory') === null ||
      localStorage.getItem('storage') === null ||
      localStorage.getItem('video-card') === null ||
      localStorage.getItem('casing') === null ||
      localStorage.getItem('power-supply') === null
    ) {
      alert('Please complete full setup to save.')
      localStorage.removeItem('myPcBuild')
    } else {
      alert('saved!')
      let fullPcBuild = {
        total: sub,
        myName,
        components: [
          cpu,
          cpuCooler,
          motherboard,
          memory,
          storage,
          videoCard,
          casing,
          powerSupply,
        ],
      }
      localStorage.setItem('myName', String(myName))
      localStorage.setItem('myPcBuild', JSON.stringify(fullPcBuild))
      history.push('/done')
    }
  }

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
                        className={styleMe.deleteButton}
                        size='small'
                        onClick={() => {
                          setCpu(null)
                          localStorage.removeItem('cpu')
                        }}
                      >
                        <TrashIcon />
                      </Button>
                    </TableCell>
                  </>
                ) : (
                  <>
                    <TableCell colSpan='3'>
                      <Button
                        variant='contained'
                        color='primary'
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
                    <TableCell>
                      <Button
                        variant='contained'
                        size='small'
                        className={styleMe.deleteButton}
                        onClick={() => {
                          setCpuCooler(null)
                          localStorage.removeItem('cpuCooler')
                        }}
                      >
                        <TrashIcon />
                      </Button>
                    </TableCell>
                  </>
                ) : (
                  <>
                    <TableCell colSpan='3'>
                      <Button
                        variant='contained'
                        color='primary'
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
                    <TableCell>
                      <Button
                        variant='contained'
                        size='small'
                        className={styleMe.deleteButton}
                        onClick={() => {
                          setMotherboard(null)
                          localStorage.removeItem('motherboard')
                        }}
                      >
                        <TrashIcon />
                      </Button>
                    </TableCell>
                  </>
                ) : (
                  <>
                    <TableCell colSpan='3'>
                      <Button
                        variant='contained'
                        color='primary'
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
                    <TableCell>
                      <Button
                        variant='contained'
                        size='small'
                        className={styleMe.deleteButton}
                        onClick={() => {
                          setMemory(null)
                          localStorage.removeItem('memory')
                        }}
                      >
                        <TrashIcon />
                      </Button>
                    </TableCell>
                  </>
                ) : (
                  <>
                    <TableCell colSpan='3'>
                      <Button
                        variant='contained'
                        color='primary'
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
                    <TableCell>
                      <Button
                        variant='contained'
                        size='small'
                        className={styleMe.deleteButton}
                        onClick={() => {
                          setStorage(null)
                          localStorage.removeItem('storage')
                        }}
                      >
                        <TrashIcon />
                      </Button>
                    </TableCell>
                  </>
                ) : (
                  <>
                    <TableCell colSpan='3'>
                      <Button
                        variant='contained'
                        color='primary'
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
                    <TableCell>
                      <Button
                        variant='contained'
                        size='small'
                        className={styleMe.deleteButton}
                        onClick={() => {
                          setVideoCard(null)
                          localStorage.removeItem('video-card')
                        }}
                      >
                        <TrashIcon />
                      </Button>
                    </TableCell>
                  </>
                ) : (
                  <>
                    <TableCell colSpan='3'>
                      <Button
                        variant='contained'
                        color='primary'
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
                    <TableCell>
                      <Button
                        variant='contained'
                        size='small'
                        className={styleMe.deleteButton}
                        onClick={() => {
                          setCasing(null)
                          localStorage.removeItem('casing')
                        }}
                      >
                        <TrashIcon />
                      </Button>
                    </TableCell>
                  </>
                ) : (
                  <>
                    <TableCell colSpan='3'>
                      <Button
                        variant='contained'
                        color='primary'
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
                    <TableCell>
                      <Button
                        variant='contained'
                        size='small'
                        className={styleMe.deleteButton}
                        onClick={() => {
                          setPowerSupply(null)
                          localStorage.removeItem('power-supply')
                        }}
                      >
                        <TrashIcon />
                      </Button>
                    </TableCell>
                  </>
                ) : (
                  <>
                    <TableCell colSpan='3'>
                      <Button
                        variant='contained'
                        color='primary'
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

      <div className='totalSection'>
        <div>
          Your Name:
          <input
            type='text'
            value={myName}
            onChange={(e) => setMyName(e.target.value)}
          />
          <Button
            style={{ marginLeft: 10 }}
            onClick={() => saveThisRigs()}
            variant='contained'
            color='primary'
            size='small'
          >
            Save this Rigs
          </Button>
        </div>
        <div>
          <h1>Sub Total: RM{sub}</h1>
        </div>
      </div>
    </Container>
  )
}
