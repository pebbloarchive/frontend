// import { ComponentProps, ElementType, Ref } from 'react';
// import { useField, UseFieldProps, useIsSubmitting } from 'formik'

// type Props<T extends ElementType> = ComponentProps<T> & {
//     as: T;
//     name?: string;
//     config?: Partial<UseFieldProps>
//     innerRef?: Ref<HTMLElement>
// }

// export default function Field<TTag extends ElementType<any>>({
//     as: Component,
//     name,
//     config,
//     innerRef,
//     ...props
// }: Props<TTag>) {
//     const isSubmitting = useIsSubmitting();
//     const [field] = useField({ name, ...config });

//     return (
//         <div>
//             <Component ref={innerRef} disabled={isSubmitting} />
//         </div>
//     )
// }

export default function() {}
