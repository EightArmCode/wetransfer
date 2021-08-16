import React, { FC, ReactElement } from 'react'
import useCircleGeometry from '../useCircleGeometry'
import { css, StyleSheet } from 'aphrodite/no-important'

type Props = {    
    progress:number    
    size:number
}

const STROKE_WIDTH = 12


const Spinner:FC<Props> = ({ progress, size }):ReactElement => {
    const { radius, circumference, midpoint } = useCircleGeometry(size, STROKE_WIDTH)
    const progressArc = (circumference - progress * circumference).toFixed()

    return (
        <>
            <div className={css(styles.spinner)}>
                <div className={css(
                    styles.label,
                    size <= 200 && styles.small,
                    size > 200 && size <= 400 && styles.medium,
                    size > 400 && styles.large,
                )}>
                    {`${Math.round(progress * 100)}%`}
                </div>
                <svg
                    role="progressbar"
                    shapeRendering="geometricPrecision"
                    viewBox={`0 0 ${size} ${size}`}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <title>Circle spinner</title>
                    <desc>An animated circle which spins to countdown the progress of your upload job.</desc>
                    <circle
                        className={css(styles.ringBackground)}
                        cx={midpoint}
                        cy={midpoint}
                        data-testid="circle"
                        id="background"
                        r={radius}
                    ></circle>
                    
                    <circle
                        className={css(styles.ringAnimation)}
                        cx={midpoint}
                        cy={midpoint}
                        data-testid="circle"
                        id="progress"
                        r={radius}
                        strokeDasharray={`${circumference} ${circumference}`}
                        strokeDashoffset={progressArc}
                    ></circle>
                    
                    <animate
                        attributeName="stroke-dashoffset"
                        begin="start.click"
                        data-testid="animation element"
                        end="stop.click"
                        fill="freeze"
                        href="#progress"
                        values={`0; ${circumference};`}
                    ></animate>
                    
                    <animate
                        additive="sum"
                        attributeName="stroke-dasharray"
                        begin="start.click"
                        data-testid="animation element"
                        end="stop.click"
                        fill="freeze"
                        from="0"
                        href="#progress"
                        to={progress}
                    ></animate>
                    
                    <animateTransform
                        attributeName="transform"
                        data-testid="animation element"
                        from="0"
                        to="360"
                        type="rotate"
                    />
                </svg>
            </div>
        </>
    )
}

const styles = StyleSheet.create({
    spinner: {
        display: 'flex',
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 30,
        position: 'relative',
        width: '100%',
        height: '100%',
    },
    label: {
        alignItems: 'center',
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        position: 'absolute',
        width: '100%',
    },
    small: {
        fontSize: '3rem'
    },
    medium: {
        fontSize: '5rem',
    },
    large: {
        fontSize: '7rem',
    },
    ringAnimation: {
        fill: 'transparent',
        stroke: 'rgb(64, 159, 255)',
        strokeWidth: STROKE_WIDTH,
        strokeLinecap: 'round',
    },
    ringBackground: {
        fill: 'transparent',
        stroke: '#eee',
        strokeWidth: STROKE_WIDTH,
    },

})

export default Spinner