import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => (
    <div className={classNames(cls.ArcticleDetailsPage, {}, [className])}>
        Article Detail Page
    </div>
);

export default memo(ArticleDetailsPage);
