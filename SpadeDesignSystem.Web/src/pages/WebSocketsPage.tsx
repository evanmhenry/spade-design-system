/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from '@/components/ui/Input'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/Button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/Form'
import useWebSocket from 'react-use-websocket'
import { useEffect, useState, useRef } from 'react'
import { throttle } from 'lodash'
import { Cursor } from '@/components/ui/Cursor'

const renderCursors = (users: any, currentUser: string) => {
	return Object.keys(users).map((uuid) => {
		const user = users[uuid]
		if (user.username !== currentUser) {
			return <Cursor key={uuid} point={[user.state.x, user.state.y]} user={user.username} />
		}
		return null
	})
}

const WebSocketsPage = () => {
	const [user, setUser] = useState(null)

	return user ? <WebSocketApp user={user} setUser={setUser} /> : <WebSocketLogin setUser={setUser} />
}

export default WebSocketsPage

type WebSocketLoginProps = {
	setUser: (user: any) => void
}

const WebSocketLogin = ({ setUser }: WebSocketLoginProps) => {
	const onSubmit = (data: any) => {
		console.log(data)
		setUser(data.username)
	}

	const form = useForm({
		defaultValues: {
			username: '',
		},
	})

	return (
		<>
			<h1 className='mb-8'>WebSockets Server Login</h1>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='w-2/3 space-y-6'>
					<FormField
						control={form.control}
						name='username'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Username</FormLabel>
								<FormControl>
									<Input placeholder='Enter username' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type='submit'>Join Server</Button>
				</form>
			</Form>
		</>
	)
}

type WebSocketAppProps = {
	user: string
	setUser: (user: any) => void
}

const WebSocketApp = ({ user, setUser }: WebSocketAppProps) => {
	const WS_URL = 'ws://127.0.2.2:5173'

	const { sendJsonMessage, lastJsonMessage } = useWebSocket(WS_URL, {
		queryParams: {
			username: user,
		},
	})

	const THROTTLE = 50 // ms

	const sendJsonMessageThrottled = useRef(throttle(sendJsonMessage, THROTTLE))

	useEffect(() => {
		window.addEventListener('mousemove', (e) => {
			sendJsonMessageThrottled.current({ x: e.clientX, y: e.clientY })
		})
	}, [])

	if (lastJsonMessage) {
		return (
			<>
				{renderCursors(lastJsonMessage, user)}
				<Button variant='destructive' onClick={() => setUser(undefined)}>
					Disconnect
				</Button>
			</>
		)
	}

	return (
		<>
			<h1>WebSockets App</h1>
			<div>Welcome, {user}</div>
		</>
	)
}

