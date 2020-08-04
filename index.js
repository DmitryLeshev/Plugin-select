import { Select } from './select/select'
import './select/styles.scss'

const select = new Select('#select', {
    data: [
        { id: '1', value: 'React' },
        { id: '2', value: 'JavaScript' },
        { id: '3', value: 'Webpack' },
        { id: '4', value: 'Sass' },
        { id: '5', value: 'Node.js' },
        { id: '6', value: 'Figma' },
    ],
    placeholder: 'Выбери пожалуйста элемент',
    selectedId: '1',
    onSelect(item) {
        console.log('Selected Item', item);
    }
})

window.s = select
