import { StudentDetail } from '@/components/swr';
import { useState } from 'react';

export default function SwrDemo() {
    const [detailList, setDetailList] = useState([1, 2, 3])
    const handleAddClick = () => {
        setDetailList([...detailList, 1])
    }
    return (
        <div>
            <h1>SWR Playround</h1>
            <button onClick={() => { handleAddClick() }}>Add detail</button>
            <ul>
                {detailList.map((u, index) => (<li key={index}><StudentDetail studentId='lea11nlelf3n3uoe' /></li>))}
            </ul>
        </div>
    );
}
