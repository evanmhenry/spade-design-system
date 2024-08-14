import { usePerfectCursor } from '@/hooks/usePerfectCursor'
import { MousePointer2 } from 'lucide-react';
import { useCallback, useLayoutEffect, useRef } from 'react'

export function Cursor({ point, user }: { point: number[]; user: string }) {
	const rCursor = useRef<SVGSVGElement>(null)
	const rLabel = useRef<HTMLDivElement>(null)

	const animateCursor = useCallback((point: number[]) => {
		const cursorElement = rCursor.current
		const labelElement = rLabel.current
		if (!cursorElement || !labelElement) return

		const [x, y] = point
		cursorElement.style.setProperty('transform', `translate(${x}px, ${y}px)`)
		labelElement.style.setProperty('transform', `translate(${x + 40}px, ${y}px)`) // Offset label to the right of the cursor
	}, [])

	const onPointMove = usePerfectCursor(animateCursor)

	useLayoutEffect(() => onPointMove(point), [onPointMove, point])

	return (
		<>
			<svg ref={rCursor} className='absolute h-8 w-8 -top-4 -left-4' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35 35' fill='none' fillRule='evenodd'>
				{/* <g fill='rgba(0,0,0,.2)' transform='translate(1,1)'>
					<path d='m12 24.4219v-16.015l11.591 11.619h-6.781l-.411.124z' />
					<path d='m21.0845 25.0962-3.605 1.535-4.682-11.089 3.686-1.553z' />
				</g>
				<g fill='white'>
					<path d='m12 24.4219v-16.015l11.591 11.619h-6.781l-.411.124z' />
					<path d='m21.0845 25.0962-3.605 1.535-4.682-11.089 3.686-1.553z' />
				</g>
				<g fill={'red'}>
					<path d='m19.751 24.4155-1.844.774-3.1-7.374 1.841-.775z' />
					<path d='m13 10.814v11.188l2.969-2.866.428-.139h4.768z' />
				</g> */}
                <MousePointer2 fill="#3b82f6" className='text-blue-500' />
			</svg>
			<div ref={rLabel} className='absolute top-1 -left-9 bg-blue-500 px-2 py-1 text-primary-foreground rounded-lg'>
				{user}
			</div>
		</>
	)
}

