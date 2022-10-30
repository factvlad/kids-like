const TextFields = ({
    id,
    name,
    value,
    required,
    children,
    classNameLabel,
    className,
    min,
    max,
    step,
    onChange,
    type,
    pattern,
    placeholder,
}) => {
    return (
        <label className={classNameLabel}>
            {children}
            <input
                id={id}
                name={name}
                type={type}
                value={value}
                placeholder={placeholder}
                pattern={pattern}
                required={required}
                className={className}
                min={min}
                max={max}
                step={step}
                onChange={onChange}
            />
        </label>
    );
};

export default TextFields;
