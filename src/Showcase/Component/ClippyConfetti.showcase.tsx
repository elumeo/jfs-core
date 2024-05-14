
import React from 'react'
import AppNavigation from './AppNavigation.showcase';
import ClippyMenu from '../../Component/Clippy/Clippy.menu';
import Layout from '../../Component/App/Layout';
import Crossfire from 'react-canvas-confetti/dist/presets/crossfire';
import Explosion from 'react-canvas-confetti/dist/presets/explosion';
import Fireworks from 'react-canvas-confetti/dist/presets/fireworks';
import Photons from 'react-canvas-confetti/dist/presets/photons';
import Pride from 'react-canvas-confetti/dist/presets/pride';
import Realistic from 'react-canvas-confetti/dist/presets/realistic';
import Snow from 'react-canvas-confetti/dist/presets/snow';
import Vortex from 'react-canvas-confetti/dist/presets/vortex';
import { Button, Card, CardContent, CardHeader, Container, FormControlLabel, MenuItem, Select, SelectProps, Stack, Switch, TextField, Typography } from '@mui/material';
import * as ClippyAction from '../../Store/Action/Clippy.action';
import { useDispatch } from 'react-redux';
import CodeBox from './CodeBox.showcase';
type Props = {}
const ConfettiVariants: Record<string, (props) => JSX.Element> = {
  crossfire: Crossfire,
  explosion: Explosion,
  fireworks: Fireworks,
  photons: Photons,
  pride: Pride,
  realistic: Realistic,
  snow: Snow,
  vortex: Vortex,
}

const ClippyConfetti: React.FC<Props> = () => {
  const dispatch = useDispatch()
  const input = React.useRef<HTMLInputElement>(null)
  const inputQueue = React.useRef<HTMLInputElement>(null)
  const inputQueueDuration = React.useRef<HTMLInputElement>(null)
  const [fire, setFire] = React.useState(false)
  const [speed, setSpeed] = React.useState(10)
  const [duration, setDuration] = React.useState(3000)
  const [delay, setDelay] = React.useState(0)
  const [variant, setVariant] = React.useState<keyof typeof ConfettiVariants>('crossfire')
  const Component = ConfettiVariants[variant]

  const onVariantChange: SelectProps['onChange'] = (event) => setVariant(event.target.value as keyof typeof ConfettiVariants)

  return <Layout navigation={<AppNavigation />} fullWidth >
    <Stack direction={'row'} gap={2} width={'100%'} height={'100%'}>
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
        <CardHeader title='Extremely useful Agent' subheader={'⚠️⚠️ close it by right-clicking the agent ⚠️⚠️'} />
        <CardContent >
          <Typography variant='subtitle1'>clippy config.json</Typography>
          <CodeBox>
            <Typography> "ClippyConfig": {`{`}</Typography>
            <Typography>       "enabled": true,</Typography>
            <Typography>        "interval": 5000,</Typography>
            <Typography>        "messages": [</Typography>
            <Typography>               "config message 1",</Typography>
            <Typography>               "config message 2",</Typography>
            <Typography>               "config message 3",</Typography>
            <Typography>               "config message 4"</Typography>
            <Typography>        ]</Typography>
            <Typography> {`}`}</Typography>
          </CodeBox>
          <Typography>
            Agent selection is saved in local storage.
          </Typography>
          <CodeBox>
            <Typography>jfs_<i>{`{`}username{`}`}</i>-_-_--preferred_clippy</Typography>
          </CodeBox>
          <Typography>
            relevant selectors are exposed under:
          </Typography>
          <CodeBox><i>src/Store/Selector/Core/ClippyConfig.selector.ts</i></CodeBox>
        </CardContent>
        <Stack >
          <ClippyMenu />
          <Button
            variant='contained'
            onClick={() => {
              dispatch(ClippyAction.clippyDestroy())
            }}>destroy</Button>
          <Stack gap={2} width={'100%'}>
            <Stack width={'100%'}>
              <TextField inputRef={input} label='message to say:' />
              <Button
                variant='outlined'
                onClick={() => {
                  dispatch(ClippyAction.clippySay(input.current?.value || ''))
                }}>Say</Button>
            </Stack>
            <Stack width={'100%'}>
              <Stack direction={'row'} width={'100%'}>
                <TextField inputRef={inputQueue} label='messages to say, one line per message:' multiline minRows={3} fullWidth />
                <TextField inputRef={inputQueueDuration} type='number' inputProps={{ inputMode: 'decimal' }} defaultValue={5000} label={'interval in ms (defaults to config)'} />
              </Stack>
              <Button
                variant='outlined'
                onClick={() => {
                  dispatch(ClippyAction.clippySayQueue((inputQueue.current?.value || '').split('\n'), inputQueueDuration.current?.valueAsNumber))
                }}>messages queue</Button>
            </Stack>
          </Stack>
        </Stack>

      </Container>
    </Stack>
  </Layout>
}
export default ClippyConfetti
