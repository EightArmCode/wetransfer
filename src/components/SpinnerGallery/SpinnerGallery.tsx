import React, { useState, useRef, FC, ReactElement, useEffect } from 'react'
import { css, StyleSheet } from 'aphrodite/no-important'
import LucidClear from '../LucidClear.jpg'
import Spinner from '../Spinner/Spinner'
import SpinnerControls from '../SpinnerControls/SpinnerControls'

const PROGRESS_MAX = 1
const PROGRESS_INTERVAL = 2000

const SpinnerGallery:FC = ():ReactElement => {
    
    const [active, setActive] = useState(false)
	const [progress, setProgress] = useState(0)
    const [velocity, setVelocity] = useState(5)
    const intervalRef = useRef<NodeJS.Timer>()
    
	useEffect(() => {
        
        if (!active) return
        
        if (intervalRef.current) resetIntervalRefs()
        
        if (PROGRESS_MAX > progress) {
            
            intervalRef.current = setInterval(
                () => {
					setProgress(Math.min(progress + velocity/100, PROGRESS_MAX))
				},
                PROGRESS_INTERVAL
            )
        
        } else {
            
            resetIntervalRefs()
            setActive(false)
        }
    })
    
    return (<>
        <article className={css(styles.fullPage)}>
			
			<div className={css(styles.spinnerGallery)}>
				<div className={css(styles.card, styles.small)}>
					<Spinner
						progress={progress}
						size={180}
					/>
				</div>
				<div className={css(styles.card, styles.medium)}>
					<Spinner
						progress={progress}
						size={360}
					/>
				</div>
				<div className={css(styles.card, styles.large)}>
					<Spinner
						progress={progress}
						size={540}
					/>
				</div>
			</div>
			
			<SpinnerControls
				active={active}
				progress={progress}
				setActive={setActive}
				setProgress={setProgress}
				setVelocity={setVelocity}
				velocity={velocity}
				resetIntervalRefs={resetIntervalRefs}
			/>
        </article>
    </>)
    // use fn declarations at the bottom to keep it DRY
    function resetIntervalRefs() {
        if (intervalRef.current) {
            clearInterval(intervalRef.current)
            intervalRef.current = undefined
        }
    }
}

const styles = StyleSheet.create({
	fullPage: {
		backgroundRepeat: 'no-repeat',
		backgroundClip: 'padding-box',
		backgroundOrigin: 'border-box',
		backgroundAttachment: 'fixed',
		backgroundSize: 'cover',
		backgroundImage: `url(${LucidClear})`,
		width: '100vw',
		height: '100vh',
		fontFamily: 'Roboto, sans-serif',

	},
	spinnerGallery: {
		height: '80vh',
		display: 'flex',
		alignItems: 'center',
		width: '100%',
	},
	card: {
		position: 'relative',
		margin: '50px auto',
		padding: 20,
		background: '#fff',
		// lifted from WeTransfer site
		borderRadius: 10,
		boxShadow: '0 0 12px 0 rgba(0, 0, 0, 10%), 0 10px 30px 0 rgba(0, 0, 0, 20%)',
	},
	small: {
		height: 200,
		width: 200,
	},
	medium: {
		height: 400,
		width: 400,
	},
	large: {
		height: 600,
		width: 600,
	},
})

export default SpinnerGallery