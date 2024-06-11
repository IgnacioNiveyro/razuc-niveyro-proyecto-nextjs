import Image from 'next/image'
export default function FavoriteLogo() {
    return (
        <Image
            src="/star.png"
            alt="Logo"
            width={10}
            height={10}
        />
        
    );
}