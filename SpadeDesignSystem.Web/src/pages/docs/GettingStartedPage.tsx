import { FC } from 'react'

const GettingStartedPage: FC = () => {
	return (
		<>
			<h1 className='text-4xl font-bold mb-6'>Getting Started</h1>
			<p className='mb-4'>Welcome to the official documentation for our software. This guide will help you get started quickly and efficiently.</p>

			<section id='installation'>
				<h2 className='text-2xl font-semibold mb-4'>Installation</h2>
				<pre className='bg-gray-100 p-4 rounded mb-6'>
					<code>
						{`# Using npm
npm install your-software-package

# Using yarn
yarn add your-software-package`}
					</code>
				</pre>
			</section>
			<section id='basic-usage'>
				<h2 className='text-2xl font-semibold mb-4'>Basic Usage</h2>
				<p className='mb-4'>Here is a simple example to get you started with our software. Create a new file and add the following code:</p>
				<pre className='bg-gray-100 p-4 rounded mb-6 overflow-x-auto max-w-full'>
					<code className='overflow-x-auto block whitespace-pre-wrap'>
						{`import { YourComponent } from 'your-software-package';

	const App = () => {
		return (
		<div>
			<YourComponent />
		</div>
		);
	};

export default App;`}
					</code>
				</pre>
			</section>
			<section id='installation'>
				<h2 className='text-2xl font-semibold mb-4'>Configuration</h2>
				<p className='mb-4'>Our software is highly configurable. Below is a basic configuration example:</p>
			</section>
			<section id='next-steps'>
				<h2 className='text-2xl font-semibold mb-4'>Next Steps</h2>
				<p className='mb-4'>Now that you have a basic understanding, explore the following sections for more detailed information:</p>
				<ul className='list-disc list-inside mb-6'>
					<li>
						<a href='/docs/advanced-usage' className='text-blue-600'>
							Advanced Usage
						</a>
					</li>
					<li>
						<a href='/docs/api-reference' className='text-blue-600'>
							API Reference
						</a>
					</li>
					<li>
						<a href='/docs/troubleshooting' className='text-blue-600'>
							Troubleshooting
						</a>
					</li>
				</ul>
				<p>
					If you have any questions or need further assistance, feel free to{' '}
					<a href='/contact' className='text-blue-600'>
						contact us
					</a>
					.
				</p>
			</section>
		</>
	)
}

export default GettingStartedPage
