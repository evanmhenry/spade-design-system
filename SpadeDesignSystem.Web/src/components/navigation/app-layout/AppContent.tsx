import { BarChartBigIcon, Square, SquareCheck, Table, TextCursorInput } from 'lucide-react'


export const NAV_OPTIONS = [
    {
        label: 'Buttons',
        path: '/buttons',
        icon: <SquareCheck className='h-5 w-5' />,
    },
    {
        label: 'Charts',
        path: '/charts',
        icon: <BarChartBigIcon className='h-5 w-5' />,
    },
    {
        label: 'Data Table',
        path: '/data-table',
        icon: <Table className='h-5 w-5' />,
    },
    {
        label: 'Cards',
        path: '/cards',
        icon: <Square className='h-5 w-5' />,
    },
    {
        label: 'Inputs',
        path: '/inputs',
        icon: <TextCursorInput className='h-5 w-5' />,
    },
]