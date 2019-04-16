import {stringify} from 'qs'
import {get, post, request} from '@utils/request'

export async function getHot() {
  return get('/api/xiaoce/getHot')
}

export async function getListByLastTime() {
  return get('/api/xiaoce/getListByLastTime')
}

export async function getEntryByTimeline({ limit = 20, category = 'all', before, recomment}) {
  let params = {
    src: 'mobile',
    limit:20,
    category,
    before,
    recomment
  }
  return get(`/api/timeline/get_entry_by_timeline?${stringify(params)}`)
}

export async function getEntryByIds() {
  return get('/api/timeline/get_entry_by_ids')
}

export async function getEntryByRank() {
  return get('/api/timeline/get_entry_by_rank')
}
