import styled from 'styled-components'
import { violet, mauve } from '@radix-ui/colors'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 220px;
`

const Text = styled.h3`
  margin: 0;
  color: ${mauve.mauve12};
  font-size: 15px;
  line-height: 19px;
  font-weight: 500;
`

const Fieldset = styled.fieldset`
  all: unset;
  display: flex;
  gap: 10px;
  align-items: center;
`

const Label = styled.label`
  font-size: 13px;
  color: ${violet.violet11};
  width: 125px;
`

const Input = styled.input`
  all: unset;
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  border-radius: 4px;
  padding: 0 10px;
  font-size: 13px;
  line-height: 1;
  color: ${violet.violet11};
  box-shadow: 0 0 0 1px ${violet.violet7};
  height: 25px;

  &:focus {
    box-shadow: 0 0 0 2px ${violet.violet8};
  }
`

function TextField({ id, label, ...rest }) {
  return (
    <Fieldset>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} {...rest} />
    </Fieldset>
  )
}

export function DatapointInfoPanel({ data }) {
  const {
    time,
    depth,
    pressure,
    pressureO2,
    pressureN,
    compartments,
    time_delta,
    depth_delta,
    descent_rate,
  } = data

  return (
    <Wrapper>
      <Text>Datapoint Information</Text>
      <TextField readOnly id="time" label="Time" value={`${time} s`} />
      <TextField readOnly id="depth" label="Depth" value={`${depth} m`} />
      <TextField
        readOnly
        id="ambient_pressure"
        label="Ambient Pressure"
        value={`${pressure.toFixed(2)} bar`}
      />
      <TextField
        readOnly
        id="oxygen_partial_pressure"
        label="O2 Partial Pressure"
        value={`${pressureO2.toFixed(2)} bar`}
      />
      <TextField
        readOnly
        id="nitrogen_partial_pressure"
        label="N2 Partial Pressure"
        value={`${pressureN.toFixed(2)} bar`}
      />
      <TextField
        readOnly
        id="time_delta"
        label="Time Δ"
        value={`${time_delta.toFixed(2)} s`}
      />
      <TextField
        readOnly
        id="depth_delta"
        label="Depth Δ"
        value={`${depth_delta.toFixed(2)} m`}
      />
      <TextField
        readOnly
        id="descent_rate"
        label="Descent Rate"
        value={`${descent_rate.toFixed(2)} m/min`}
      />
      <hr />
      <Text>Compartments</Text>
      {compartments.map(({ name, gas_pressure }) => (
        <TextField
          readOnly
          key={name}
          id={name}
          label={`Compartment ${name}`}
          value={`${gas_pressure.toFixed(3)} bar`}
        />
      ))}
    </Wrapper>
  )
}