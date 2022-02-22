import { useNavigate } from 'react-router-dom'
export default function Header() {
    const navigate = useNavigate();
    return (
        <div class="w-full h-10 bg-orange-300 
       text-center
       flex justify-center items-center">
            <button class="italic" onClick={() => navigate("/products")}>OccaBrowse</button>
        </div>
        )

}