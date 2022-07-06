import styles from './Avatar.module.css'

//* usando desestruturação no props (props) = ({hasBorder=true, src})
export function Avatar({ hasBorder = true, src }) {
    return (
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
            src={src} 
        />
    );
}