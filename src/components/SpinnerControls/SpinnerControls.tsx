import React, { FC, ReactElement } from 'react'
import { Button, ButtonGroup, Slider } from '@material-ui/core'
import { css, StyleSheet } from 'aphrodite/no-important'

type Props = {
    active:boolean
    progress:number
    resetIntervalRefs:() => void
    setProgress:(progress:number) => void
    setVelocity:(velocity:number) => void
    setActive:(active:boolean) => void
    velocity:number
}

const SpinnerControls:FC<Props> = ({
    
    active,
    setActive,
    
    progress,
    setProgress,
    
    velocity,
    setVelocity,
    
    resetIntervalRefs,

}):ReactElement => {
    
    const marks = [
		{
			value: 5,
			label: '5%',
		},
		{
			value: 10,
			label: '10%',
		},
		{
			value: 25,
			label: '25%',
		},
		{
			value: 50,
			label: '50%',
		},
		{
			value: 75,
			label: '75%',
		},
		{
			value: 90,
			label: '90%',
		},
	]

    return (
        <div className={css(styles.interactions)}>
			<div className={css(styles.buttonsWrapper)}>

                <ButtonGroup color="primary" aria-label="outlined primary button group">
                    
                    <Button
                        disabled={progress >= 1}
                        id="start"
                        onClick={() => setActive(true)}
                    >
                        Start
                    </Button>

                    <Button
                        id="stop"
                        onClick={() => {
                            setActive(false)
                            resetIntervalRefs()
                        }}
                    >
                        Stop
                    </Button>
                    
                    <Button
                        disabled={active}
                        id="reset"
                        onClick={() => {
                            resetIntervalRefs()
                            setProgress(0)
                        }}
                    >
                        Reset
                    </Button>
                </ButtonGroup>
            </div>
            <Slider
                aria-labelledby="discrete-slider-custom"
                getAriaValueText={(value:number) => `${value}%`}
                id="slider"
                marks={marks}
                onChange={(e, value) => {
                    // do not accept array value
                    if (!Array.isArray(value)) setVelocity(value)
                }}
                role="slider"
                step={null}
                data-testid="internal-slider"
                value={velocity}
                valueLabelDisplay="auto"
            />
        </div>
    )
}

const styles = StyleSheet.create({
    interactions: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: '#eaf2dd',
		// marginTop: '5%',
		padding: 24,
	},
	buttonsWrapper: {
		display: 'flex',
		justifyContent: 'center',
		marginBottom: 24,
	}
})

export default SpinnerControls