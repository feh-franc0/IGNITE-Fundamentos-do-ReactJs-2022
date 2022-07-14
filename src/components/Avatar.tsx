import styles from './Avatar.module.css'

interface AvatarProps {
    hasBorder?: boolean;
    src: string;
    alt?: string;
}

//* usando desestruturação no props (props) = ({hasBorder=true, src})
export function Avatar({ hasBorder = true, src, alt }: AvatarProps) {
    return (
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
            src={src} 
            alt={alt}
        />
    );
}