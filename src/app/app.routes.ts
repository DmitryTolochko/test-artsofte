import { Routes } from '@angular/router';
import { CompanyList } from './components/company-list/company-list';
import { CompanyDetail } from './components/company-detail/company-detail';
import { CompanyYandexMap } from './components/company-yandex-map/company-yandex-map';

export const routes: Routes = [
    {
        path: 'list',
        component: CompanyList,
        title: 'Список компаний'
    },
    {
        path: 'detail/:id',
        component: CompanyDetail,
        title: 'Страница о компании'
    },
    {
        path: 'map',
        component: CompanyYandexMap,
        title: 'Компания на карте'
    }
];
