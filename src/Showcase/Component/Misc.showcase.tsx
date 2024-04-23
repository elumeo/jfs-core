
import React from 'react'
import AppNavigation from './AppNavigation.showcase';
import Layout from '../../Component/App/Layout';
import Crossfire from 'react-canvas-confetti/dist/presets/crossfire';
import Explosion from 'react-canvas-confetti/dist/presets/explosion';
import Fireworks from 'react-canvas-confetti/dist/presets/fireworks';
import Photons from 'react-canvas-confetti/dist/presets/photons';
import Pride from 'react-canvas-confetti/dist/presets/pride';
import Realistic from 'react-canvas-confetti/dist/presets/realistic';
import Snow from 'react-canvas-confetti/dist/presets/snow';
import Vortex from 'react-canvas-confetti/dist/presets/vortex';
import { Button, Card, CardContent, CardHeader, Container, FormControlLabel, MenuItem, Select, SelectProps, Stack, Switch, TextField } from '@mui/material';
import * as ClippyAction from '../../Store/Action/Clippy.action';
import { useDispatch } from 'react-redux';
type Props = {}
const ConfettiVariants: Record<string, (any) => JSX.Element> = {
    crossfire: Crossfire,
    explosion: Explosion,
    fireworks: Fireworks,
    photons: Photons,
    pride: Pride,
    realistic: Realistic,
    snow: Snow,
    vortex: Vortex,
}

const MiscShowcase: React.FC<Props> = () => {
    const dispatch = useDispatch()
    const input = React.useRef<HTMLInputElement>(null)
    const [fire, setFire] = React.useState(false)
    const [speed, setSpeed] = React.useState(10)
    const [duration, setDuration] = React.useState(3000)
    const [delay, setDelay] = React.useState(0)
    const [variant, setVariant] = React.useState<keyof typeof ConfettiVariants>('crossfire')
    const Component = React.useMemo(() => ConfettiVariants[variant], [variant])

    const onVariantChange: SelectProps['onChange'] = (event, value) => {
        setVariant(event.target.value as keyof typeof ConfettiVariants)
    }
    return <Layout navigation={<AppNavigation />}>
        <Stack direction={'row'} gap={2}>
            <Container component={Card}>
                <Stack component={CardContent} gap={2}>
                    <CardHeader title='🎉Confetti!🎉' />
                    <Select<keyof typeof ConfettiVariants> onChange={onVariantChange} value={variant} >
                        {Object.keys(ConfettiVariants).map((key) => {
                            return <MenuItem key={key} value={key}>{key}</MenuItem>
                        })}
                    </Select>
                    <TextField label='Speed' type='number' value={speed} onChange={e => setSpeed(parseFloat(e.target.value))} />
                    <TextField label='Duration' type='number' value={duration} onChange={e => setDuration(parseFloat(e.target.value))} />
                    <TextField label='Delay' type='number' value={delay} onChange={e => setDelay(parseFloat(e.target.value))} />
                    <FormControlLabel label={`Toggle Confetti!`} control={
                        <Switch value={fire} onChange={() => setFire(old => !old)} />
                    } />


                    {fire && <Component autorun={{ speed, duration, delay }} />}
                </Stack>
            </Container>
            <Container component={Card}>
                <CardHeader title='Extremely useful Agent' />
                <Stack gap={2}>
                    <TextField inputRef={input} label='message to say:' />
                    <Button
                        variant='contained'
                        onClick={() => {
                            dispatch(ClippyAction.clippySay(input.current?.value || ''))
                        }}>Say</Button>
                </Stack>

            </Container>
        </Stack>
    </Layout>
}
export default MiscShowcase