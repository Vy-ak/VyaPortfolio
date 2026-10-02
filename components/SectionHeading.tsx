type Props = {
    eyebrow: string;
    title: string;
    description?: string;
    center?: boolean;
}

export default function SectionHeading({ eyebrow, title, description, center}: Props){
    return(
        <div
        className={`mb-14 max-w-2xl ${center ? "mx-auto text-center": ""}`}>
            <p className="text-sm font-medium text-brand">{eyebrow}</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
            {description && <p className="mt-4 text-muted-foreground">{description}</p>}
        </div>
    );
}